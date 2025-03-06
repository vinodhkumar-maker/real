import { lazy } from "react";

type ComponentImportType = () => Promise<{ default: React.ComponentType<unknown> }>

const seesionKeyPrefix = 'lazyWithRetry'
const maxAttempts = 3;
const retryDelay = 1000;

export const lazyWithRetry = (
    componentImport: ComponentImportType,
    name: string

) => {

    const getSessionKey = () => `${seesionKeyPrefix}-${name}`

    const getAttemptCount = () => Number(globalThis.sessionStorage.getItem(getSessionKey()) || '0')

    const incrementAttempt = () => globalThis.sessionStorage.setItem(getSessionKey(), String(getAttemptCount() + 1),)

    const clearAttempts = () => globalThis.sessionStorage.removeItem(getSessionKey())

    return lazy(async (): Promise<{ default: React.ComponentType<unknown> }> => {
        try {
            const component = await componentImport()
            //clear attemptson succesful load
            clearAttempts()

            return component

        } catch (error) {
            const attempt = getAttemptCount();

            if (attempt < maxAttempts - 1) {
                incrementAttempt()

                // Add delay before refresh to prevent rapid reload
                await new Promise((resolve) => setTimeout(resolve, retryDelay));

                if (typeof window !== 'undefined') {
                    window.location.reload()
                }
            } else {
                clearAttempts();
                throw new Error(
                    `Failed to load component ${name} after ${maxAttempts} attempts: ${error} `
                )
            }
            throw new Error('chunkLoadError')

        }
    })

}