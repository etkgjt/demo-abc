import React from 'react';
import LModal from './LModal';
export default class DataListView extends React.Component {
	constructor(props: any) {
		super(props);
	}
	state: {
		modalOpen: boolean;
		listName: Array<string>;
		modalData: string;
	} = {
		modalOpen: false,
		listName: ['Nguyen Long', 'Nguyen Thi A', 'Nguyen Van B'],
		modalData: '',
	};
	_handleCloseModal = (): void => {
		this.setState({
			...this.state,
			modalOpen: false,
		});
	};
	_handleUpdateData = (oldName: string, newName: string) => {
		const newListData = this.state?.listName?.map((v) =>
			v === oldName ? newName : v
		);
		console.log('old name', oldName, 'new Name', newName, newListData);
		this.setState({
			listName: [...newListData],
			modalData: '',
			modalOpen: false,
		});
	};
	render() {
		return (
			<div
				style={{
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{this.state.modalOpen ? (
					<LModal
						modalData={this.state.modalData}
						onModalCloseClick={this._handleCloseModal}
						onUpdateClick={this._handleUpdateData}
					/>
				) : (
					<div>
						{this.state.listName?.map((v) => (
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									width: '100vw',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}
							>
								<p>{v}</p>
								<button
									onClick={() =>
										this.setState({
											...this.state,
											modalOpen: true,
											modalData: v,
										})
									}
								>
									Update
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		);
	}
}
