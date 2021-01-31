import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

interface Props {
    close();
}

const ClosableHeader = ({close}: Props) => {
    return (
        <nav className="navbar navbar-default fixed-top-drawer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <FontAwesomeIcon
                            className="pointer"
                            size="2x"
                            icon={faTimes}
                            onClick={close}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export {ClosableHeader}