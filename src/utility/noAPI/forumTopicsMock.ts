import type { ForumTopic } from "@/types";

export const forumTopicsMock : ForumTopic[] = [
    {
        name: 'All',
        request: 'all',
    },
    {
        name: 'Tricolor',
        request: 'tricolor',
        subtopics:[
            {
                name:'Tri',
                request:'tri'
            },
            {
                name:'Pscycho',
                request:'pscycho'
            },
        ]
    },
    {
        name: 'Montero',
        request: 'montero',
        subtopics:[
            {
                name:'Luna',
                request:'luna'
            },
            {
                name:'Cat',
                request:'cat'
            },
        ]
    },
]