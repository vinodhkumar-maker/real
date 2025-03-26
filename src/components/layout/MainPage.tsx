'use client';
import { Button, Group, Image, Text } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { IconUpload, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function FileDropInput({ children }: { children?: React.ReactNode }) {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        alt={file.name}
        radius="md"
        width={120}
        height={120}
        fit="cover"
      />
    );
  });
  const defaultData = <div>hello</div>;

  return (
    <div className="flex flex-row justify-center my-10">
      <div className="p-4 border rounded-xl shadow-md bg-white w-[500px] hover:border-blue-500">
        <Dropzone
          onDrop={(droppedFiles) => setFiles(droppedFiles)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={['image/*', '.pdf', '.docx', '.zip']}
        >
          {children ? children : defaultData}
          <Group justify="center" gap="xs" style={{ minHeight: 150, pointerEvents: 'none' }}>
            <IconUpload size="2rem" stroke={1.5} />
            <div>
              <Text size="md" inline>
                Drag images or files here
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Accepts images, pdf, docs, zip files — up to 5 MB each
              </Text>
            </div>
          </Group>
        </Dropzone>
      </div>

      <div>
        {files.length > 0 && (
          <>
            <Text mt="md" fw="bold">
              Preview:
            </Text>
            <Group mt="sm" wrap="wrap">
              {previews}
            </Group>
            <Button
              mt="md"
              variant="light"
              color="red"
              onClick={() => setFiles([])}
              leftSection={<IconX />}
            >
              Clear Files
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export const Page: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl mb-4">Upload Files / Images (Drag & Drop)</h1>
      <FileDropInput />
    </div>
  );
};
