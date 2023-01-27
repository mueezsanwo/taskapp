import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        tasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Task']
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'post',
                body: task
            }),
            invalidatesTags: ['Task']
        }),
        updateTask: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/tasks/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Task']
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task']

    })
})
})

export const {
    useTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
  } = taskApi 