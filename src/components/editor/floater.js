import './floater.css'
import widgetIcon from '../../assets/icons/widget-lib.png'
import userIcon from '../../assets/icons/account.png'

const Floater = ({  }) => {

    return (
        <div className="floater">
            <div className="floater__inner">
                <img src={ widgetIcon } alt="Widget Library" />
                <img src={ userIcon } alt="User Account" />
            </div>
        </div>
    )

}

export default Floater