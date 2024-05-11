export type ButtonType = 'primary' | 'danger' | 'success';

export interface ButtonDataInterface {
    color: ButtonType;
    text: string;
};

export type todoType = 'default' | 'timeframed' | 'urgent';

export interface Todo {
    id: number;
    type: todoType;
    text: string;
    dateDue?: string;
    isDone: boolean;
    isFavorite: boolean;
}

