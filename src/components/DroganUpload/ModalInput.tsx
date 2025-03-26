import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Text } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import FileDropInput from './FileDropInput';

export const ModalInput: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);

  const handleClear = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center mt-10">
      <Button onClick={() => setOpened(true)}>Open Upload Modal</Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Upload Files / Images"
        size="md"
        centered
        radius="md"
      >
        <div>
          <FileDropInput onFilesChange={setUploadedFiles} maxSizeMB={5} />

          {uploadedFiles.length > 0 && (
            <div>
              <Text mt="lg" fw="bold">
                Uploaded Files:
              </Text>
              <ul className=" list-decimal list-inside mt-2">
                {uploadedFiles.map((file, index) => (
                  <div className="flex flex-row justify-between py-1">
                    <li key={index} className="overflow-hidden flex-nowrap line-clamp-1">
                      {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                    </li>
                    <FontAwesomeIcon
                      icon={faTrash}
                      color="red"
                      onClick={() => handleClear(index)}
                      className=" hover:bg-red-300 p-1 rounded-sm"
                    />
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalInput;
