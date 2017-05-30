const initialState = {
  inputText: '',
};

const inputText = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'CAPTURE_INPUT':
      return data;
    default:
      return state;
  }
};

export default inputText;
