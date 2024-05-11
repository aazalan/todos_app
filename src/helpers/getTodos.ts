import type {Todo} from "@/types/main";

export const getTodos = async ():Promise<Todo[]>  =>  {
    return [
        {
            id: 1,
            type: 'default',
            text: 'Купить хлеб',
            isDone: false,
            isFavorite: false,
        },
        {
            id: 2,
            type: 'urgent',
            text: 'Выбросить мусор',
            isDone: false,
            isFavorite: false,
        },
        {
            id: 2,
            type: 'urgent',
            text: 'Убрать комнату',
            isDone: true,
            isFavorite: false,
        }
    ];
}