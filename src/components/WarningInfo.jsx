import PropTypes from 'prop-types'

import './WarningInfo.css'

const WarningInfo = (props) => {
	return <div className="warning-message">
		{props.message}
	</div>
}

WarningInfo.propTypes = {
	message: PropTypes.string
}

export default WarningInfo

