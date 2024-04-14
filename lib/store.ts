import { configureStore } from '@reduxjs/toolkit'
import langSelectorReducer from './features/langSelector'
import activePageReducer from './features/activePage'


export const makeStore = () => {
    return configureStore({
        reducer: {
            langSelector: langSelectorReducer,
            activePage: activePageReducer,
        },
    })

}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
