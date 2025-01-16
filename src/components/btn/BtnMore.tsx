import style from "./btnMore.module.css";
const BtnMore = ({ onSetPage }: { onSetPage: () => void }) => {
	return (
		<button
			className={style.btnMore}
			onClick={() => {
				onSetPage();
			}}
		>
			Voir plus
		</button>
	);
};

export default BtnMore;
