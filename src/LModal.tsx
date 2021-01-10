import React from 'react';
interface Props {
	onModalCloseClick: () => void;
	onUpdateClick: (oldName: string, newName: string) => void;
	modalData: string;
}

export default class LModal extends React.Component<Props> {
	constructor(props: any) {
		super(props);
	}
	state: { name: string } = { name: '' };
	render() {
		return (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'black',
				}}
			>
				<div
					style={{
						width: '30vw',
						height: '70vh',

						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						backgroundColor: 'yellow',
						position: 'relative',
					}}
				>
					<button
						style={{ position: 'absolute', top: 0, right: 0 }}
						onClick={this.props.onModalCloseClick}
					>
						Close
					</button>
					<h4>Current Name: {this.props.modalData} </h4>
					<h4>Update</h4>
					<input
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							this.setState({ name: e.currentTarget.value });
						}}
						type="text"
					></input>
					<button
						style={{ position: 'absolute', bottom: 20, right: '45%' }}
						onClick={() =>
							this.props.onUpdateClick(
								this.props.modalData,
								this.state.name
							)
						}
					>
						Update
					</button>
				</div>
			</div>
		);
	}
}
