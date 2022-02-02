import React from 'react'
import Contacts from "./Contacts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        contacts: state.contactsPart.contacts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ContactsContainerFun = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainerFun;