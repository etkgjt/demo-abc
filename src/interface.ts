export interface TodoProps {
	id: string;
	title: string;
	done: boolean;
	onDelete: (id: string) => void;
	onCheck: (status: boolean) => void;
}
