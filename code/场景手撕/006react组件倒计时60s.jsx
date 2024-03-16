
function Compontent() {
	const [nowTime, setNowTime] = useCount(0);
	const onClick = () => {
		setNowTime(60);
	};
	return (
		<>
			<button onClick={onClick}>{nowTime}</button>
		</>
	);
}


function useCount(init) {
	const [secound, setSecound] = useState(init);
	useEffect(() => {
		if (secound > 0) {
			setTimeout(() => {
				setSecound(secound - 1);
			}, 1000);
		}
	}, [secound]);
	return [secound, setSecound];
}