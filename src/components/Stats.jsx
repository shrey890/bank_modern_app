import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
	<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((stat) => (
			<div
				key={stat.id}
				className="flex-1 flex justify-center items-center flex-row m-3"
			>
				<h4 className="font-poppins leading-[43px] text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px]">
					{stat.value}
				</h4>
				<p className="font-poppins leading-[21px] uppercase ml-3 text-white font-normal xs:text-[20px] text-[15px] xs:leading-[26px]">
					{stat.title}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
