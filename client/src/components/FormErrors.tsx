// import * as React from 'react'

// interface FormError {
// 	fieldName: string
// 	value: number
// }

// interface FormError { 
//     [key:string] : number; 
//  }

// interface FormErrorList extends React.Props<any> {
// 	formErrors: Object<FormError>
// }

// export default class FormErrors extends React.Component<FormErrorList, any> {
// 	constructor(props: any) {
// 		super(props);

// 	}
// 	render() {
// 		<div className='formErrors'>
// 			{Object.keys(this.props.formErrors).map((fieldName, i) => {
// 				if (this.props.formErrors[fieldName].length > 0) {
// 					return (
// 						<p key={i}>{fieldName} {this.props.formErrors[fieldName]}</p>
// 					)
// 				} else {
// 					return '';
// 				}
// 			})}
// 		</div>
// 	}
// }
// export const FormErrors = () =>
// 	<div className='formErrors'>
// 		{Object.keys(formErrors).map((fieldName, i) => {
// 			if (formErrors[fieldName].length > 0) {
// 				return (
// 					<p key={i}>{fieldName} {formErrors[fieldName]}</p>
// 				)
// 			} else {
// 				return '';
// 			}
// 		})}
// 	</div>