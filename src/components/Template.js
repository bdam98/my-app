import React from 'react'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import {IconButton} from "@material-ui/core"
import UnFoldMoreIcon from "@material-ui/icons/UnfoldMore"
import "./Template.css"

import blank from "../assets/blankForm.png"
import uuid from "react-uuid"
import {useHistory} from 'react-router-dom';

function Template(){
    const history = useHistory();

    const createForm = () => {
        const id_ =uuid();

        history.push("/form/"+id_)
    }
    return(
        <div className="template_section">
            <div className= "template_top">
                <div className= "template_left">
                    <span style={{fontSize: "16px", color: "#202124"}}>Start New Form</span>
                </div>
                <div className= "template_right">
                <div className= "gallery_button">
                    Template gallery
                    <UnFoldMoreIcon />
                </div>
                <IconButton>
                    <MoreVertIcon fontSize= "small"/>
                </IconButton>
                </div>
            </div>
                <div className= "template_body">
                    <div className= "card" onClick={createForm}>
                        <img src={blank} alt= "no image" className= "card_image"/>
                        <p className= "card_title">Blank</p>
                    </div>
                </div>
        </div>
    )
}

export default Template;