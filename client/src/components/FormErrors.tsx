import * as React from 'react'

interface FormError { 
    [key:string] : string; 
}

interface FormErrorValue extends React.Props<FormError> {
    formErrors: FormError
}

export default class FormErrors extends React.Component<FormErrorValue, any> {
    constructor(props:any){
        super(props);
        this.state = {

        };

    }

    render() {
        return(
            <div>
                {/*{Object.keys(this.props.formErrors).forEach(key => {
                    if(this.props.formErrors[key].length > 0) {
                        return (<p key={key}>{key} {this.props.formErrors[key]}</p>)
                    } else {
                        return '';
                    }   
                })}*/}
            </div>
        )
    }
}