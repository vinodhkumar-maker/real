import { Avatar } from '@mantine/core';
import { UserDetail } from '../../apiType';
import { getRandomColor } from '../utils.ts/userTypes';
import InputText from '../input/TextInputMantaine';
import ZenButton from '../button/ZenButton';

interface UserInformationDetailsProps {
  formValues: UserDetail;
  setFormValues: React.Dispatch<React.SetStateAction<UserDetail>>;
  saveFormValue: (value: UserDetail) => void;
  isEditing: boolean;
  onCancel: () => void;
  selectInfo: UserDetail[];
}

const UserInformationDetails: React.FC<UserInformationDetailsProps> = ({
  formValues,
  setFormValues,
  saveFormValue,
  isEditing,
  onCancel,
  selectInfo,
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Avatar
          variant="light"
          color={getRandomColor()}
          size="lg"
          className="mx-auto my-4"
          name={selectInfo?.[0]?.name}
        />
        <div className=" flex flex-col justify-center">
          <p className="text-center text-base font-semibold">Name: {selectInfo?.[0]?.name}</p>
          <p className="text-center text-sm font-normal">Phone: {selectInfo?.[0]?.phone}</p>
          <p className="text-center text-sm font-normal">Email: {selectInfo?.[0]?.email}</p>
        </div>
      </div>
      <form
        className="px-2 flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          saveFormValue(formValues);
        }}
      >
        <InputText
          type="text"
          label="Name"
          placeholder="Enter Name"
          value={formValues.name}
          onChange={(value: string) => setFormValues({ ...formValues, name: value })}
        />
        <InputText
          type="email"
          label="Email"
          placeholder="Enter Email"
          value={formValues.email}
          onChange={(value: string) => setFormValues({ ...formValues, email: value })}
        />
        <InputText
          type="number"
          label="Phone Number"
          placeholder="Enter Phone Number"
          value={formValues.phone}
          onChange={(value: string) => setFormValues({ ...formValues, phone: value })}
        />
        <div className="flex flex-row justify-end mt-2 gap-2">
          <ZenButton
            label={isEditing ? 'Cancel' : 'Clear'}
            type="button"
            variant="primary-outline"
            className="border"
            onClick={onCancel}
          />
          <ZenButton label={isEditing ? 'Save Changes' : 'Save'} variant="primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UserInformationDetails;
