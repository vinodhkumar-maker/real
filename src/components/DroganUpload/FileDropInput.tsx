'use client';
import { faFileCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CloseButton, Group, Image, ScrollArea, Text } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import ZenButton from '../button/ZenButton';
import clsx from 'clsx';
import { ThemeColors } from '../types';

type FileDropInputProps = {
  onFilesChange: (files: FileWithPath[]) => void;
  maxSizeMB?: number;
};

const FileDropInput: React.FC<FileDropInputProps> = ({ onFilesChange, maxSizeMB = 5 }) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const theme = ThemeColors['dark'];

  const handleFileDrop = (droppedFiles: FileWithPath[]) => {
    setFiles(droppedFiles);
    onFilesChange(droppedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const handleClearFiles = () => {
    setFiles([]);
    onFilesChange([]);
  };

  return (
    <>
      <Dropzone
        onDrop={handleFileDrop}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={maxSizeMB * 1024 ** 2}
        accept={['image/*', '.pdf', '.docx', '.zip']}
        className={clsx(
          'border rounded-md bg-gray-100 hover:border-blue-500',
          theme.backgroundColor,
          theme.text,
        )}
      >
        <Group justify="center" gap="xs" style={{ minHeight: 150 }}>
          <FontAwesomeIcon icon={faFileCirclePlus} size="xl" />
          <div className={clsx('flex flex-col', theme.text, 'hover:text-blue-500')}>
            <Text size="md" inline>
              Drag and drop files here
            </Text>
            <Text size="sm" c="p" inline mt={7}>
              Accepts images, pdf, docs, zip — up to {maxSizeMB} MB each
            </Text>
          </div>
        </Group>
      </Dropzone>

      {files.length > 0 && (
        <>
          <ScrollArea h={200} mt="md">
            <Group wrap="wrap" gap="md">
              {files.map((file, index) => {
                const imageUrl = file.type.startsWith('image') ? URL.createObjectURL(file) : '';

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center gap-0.5 justify-center"
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={file.name}
                        radius="md"
                        width={120}
                        height={120}
                        fit="cover"
                      />
                    ) : (
                      <div className="w-[120px] h-[120px] flex items-center justify-center border rounded-md bg-gray-100 text-center text-xs p-2">
                        {file.name}
                      </div>
                    )}
                    <CloseButton
                      className="absolute top-1"
                      onClick={() => handleRemoveFile(index)}
                    />
                  </div>
                );
              })}
            </Group>
          </ScrollArea>
          <ZenButton
            label="Clear All Files"
            textSize="sm"
            variant="danger"
            onClick={handleClearFiles}
            leftIconComponent={<FontAwesomeIcon icon={faTrash} />}
          />
        </>
      )}
    </>
  );
};

export default FileDropInput;
