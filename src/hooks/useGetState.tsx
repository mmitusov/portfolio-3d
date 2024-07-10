import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useGetState = () => {
	//Reading data from the store with useSelector
	//And creating shortcut variables to get state from each slice 
  const countState = useSelector((state: RootState) => state.test.count);
  const contactFormState = useSelector((state: RootState) => state.contactForm);

	return {
		countState,
    contactFormState,
    // Add more state variables here if needed
	};

  //First - reading data from the store with useSelector
	// const state = useSelector((state: RootState) => state);

  //Second - creating shortcut variables to get state from each slice 
	// // const player = state.player;
	// // const tracksList = state.tracksList;	

  //Returning created shortcuts
	// return {
	// 	player,
	// 	tracksList
	// };
};