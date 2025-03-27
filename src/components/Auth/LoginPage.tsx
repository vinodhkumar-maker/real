import { zodResolver } from '@hookform/resolvers/zod';
import { Notification, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import ZenButton from '../button/ZenButton';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormValues = z.infer<typeof schema>;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const onSubmit = async (data: FormValues) => {
    console.log('Submitted Data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const storeData: FormValues = {
      email: 'vinodh@gmail.com',
      password: 'P@ssw0rd',
    };

    const nextpage = data.email === storeData.email && data.password === storeData.password;

    reset();
    setShowNotification(true);

    if (nextpage) {
      setTimeout(() => navigate('/modalcontainer'), 2000);
    }
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="absolute top-4 right-4">
        {showNotification && (
          <Notification title="Your data was submitted successfully" color="green">
            <p>Thank you for submitting your data</p>
          </Notification>
        )}
      </div>

      <form
        className="flex flex-col gap-4 w-[400px] rounded-xl bg-white shadow-lg px-6 py-8 hover:shadow-red-400"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          {...register('email')}
          label="Email"
          placeholder="Enter Email"
          variant="filled"
          error={errors.email?.message}
        />

        <TextInput
          {...register('password')}
          label="Password"
          placeholder="Enter Password"
          variant="filled"
          type="password"
          error={errors.password?.message}
        />

        <ZenButton
          label={isSubmitting ? 'Submitting...' : 'Submit'}
          type="submit"
          variant="primary"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default LoginPage;
