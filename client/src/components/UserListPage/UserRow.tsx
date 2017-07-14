import * as React from 'react';
import { Link } from 'react-router-dom'

interface Props extends React.Props<any> {
	row: any;
}

export default class UserRow extends React.Component<Props, {}> {

	constructor(props: Props) {
		super(props);
		this.deleteUser = this.deleteUser.bind(this)
	}

	deleteUser() {
		var url = '/api/del/' + this.props.row._id
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'POST',          
            success: function (data: any) {
                window.location.href = '/'
                console.log("delete data success")
            }.bind(this),
            error: function (xhr, text, err) {
                console.log("error writing data to db")
            }
        });
	}
	public render() {
		return (
			<tr>
				<td>{this.props.row.status}</td>
				<td>{this.props.row.companyId}</td>
				<td>{this.props.row.lastName}</td>
				<td>{this.props.row.email}</td>
				<td>{this.props.row.telephone}</td>
				<td>{this.props.row.commission}</td>
				<td>
					<Link to={`/edituser/${this.props.row._id}`} className="btn btn-info btn-xs"><i className="fa fa-pencil">Modifier</i></Link>
					
					<button className="btn btn-success btn-xs" onClick={this.deleteUser}>Désativer</button>
					<button className="btn btn-danger btn-xs">Activer</button>
				</td>
			</tr>
		);
	}
}
