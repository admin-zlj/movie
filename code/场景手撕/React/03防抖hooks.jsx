const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const ref = useRef();
  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(ref.current);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 在组件中使用自定义防抖 Hook
const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};

const useDebouncedFunction = (func, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
