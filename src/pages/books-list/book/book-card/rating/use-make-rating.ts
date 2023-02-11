export function useMakeRating() {

  interface IRatingItem {
    id: string,
    inputType: string,
    inputValue: string,
    inputName: string,
    xmlns: string,
    fill: string,
    d: string,
    stroke: string,
  }

  const star1 = {
    id: '1',
    inputType: 'radio',
    inputValue: '5',
    inputName: 'rating',
    xmlns: 'http://www.w3.org/2000/svg',
    d: 'M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z',
    stroke: '#FFBC1F',
    fill: 'none'
  };

  const star2 = {
    id: '2',
    inputType: 'radio',
    inputValue: '4',
    inputName: 'rating',
    xmlns: 'http://www.w3.org/2000/svg',
    d: 'M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z',
    stroke: '#FFBC1F',
    fill: 'none'
  };

  const star3 = {
    id: '3',
    inputType: 'radio',
    inputValue: '3',
    inputName: 'rating',
    xmlns: 'http://www.w3.org/2000/svg',
    d: 'M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z',
    stroke: '#FFBC1F',
    fill: 'none'
  };

  const star4 = {
    id: '4',
    inputType: 'radio',
    inputValue: '2',
    inputName: 'rating',
    xmlns: 'http://www.w3.org/2000/svg',
    d: 'M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z',
    stroke: '#FFBC1F',
    fill: 'none'
  };

  const star5 = {
    id: '5',
    inputType: 'radio',
    inputValue: '1',
    inputName: 'rating',
    xmlns: 'http://www.w3.org/2000/svg',
    d: 'M10.098 8.30426L12.5 2.54946L14.902 8.30426C15.0419 8.63938 15.3576 8.86723 15.7187 8.89608L21.9493 9.39383L17.2036 13.4448C16.9276 13.6804 16.8064 14.0508 16.891 14.4042L18.3415 20.4636L13.0041 17.215C12.6945 17.0266 12.3055 17.0266 11.9959 17.215L6.65848 20.4636L8.10898 14.4042C8.19359 14.0508 8.07245 13.6804 7.79644 13.4448L3.05067 9.39383L9.28134 8.89608C9.64244 8.86723 9.9581 8.63938 10.098 8.30426Z',
    stroke: '#FFBC1F',
    fill: 'none'
  };

  const rating: IRatingItem[] = [star1, star2, star3, star4, star5];

  return rating;
};
