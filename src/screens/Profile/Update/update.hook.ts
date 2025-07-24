import { useState } from 'react';
import {
  Asset,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { Iupadatepropes } from './Iupdate.propes';
export const useedit = ():Iupadatepropes => {
  const [photo, setphoto] = useState<Asset | null>(null);

  const selectimage = () => {
    const option: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(option, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User Canncel to pick image');
      } else if (response.errorCode) {
        console.log('Image Picker Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setphoto(response.assets[0]);
      }
    });
  };

  return {
    selectimage,
    photo
  };
};
