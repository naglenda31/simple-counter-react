import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export function SimpleCounter(props) {
	return (
		<div className="counter d-flex flex-row align-items-center justify-content-between">
			<div className="clock">
				<FontAwesomeIcon icon={faClock} />
			</div>

			<div className="digit">{props.six % 10}</div>
			<div className="digit">{props.five % 10}</div>

			<div className="digit">{props.four % 10}</div>
			<div className="digit">{props.three % 10}</div>

			<div className="digit">{props.two % 10}</div>
			<div className="digit">{props.one % 10}</div>
		</div>
	);
}

SimpleCounter.defaultProps = {
	one: 0,
	two: 0,
	three: 0,
	four: 0,
	five: 0,
	six: 0
};

SimpleCounter.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	five: PropTypes.number,
	six: PropTypes.number
};
