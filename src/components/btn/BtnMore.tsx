
import style from "./btnMore.module.scss";
const BtnMore = ({ onSetPage, loading  }: { onSetPage: () => void, loading :boolean }) => {

	
	
	
		return (
		
			<button
				className={style.btnMore}
				onClick={() => {
					onSetPage();
				}}
				disabled={loading}
			>
				Voir plus
			</button>
		);

	
	
};

export default BtnMore;
