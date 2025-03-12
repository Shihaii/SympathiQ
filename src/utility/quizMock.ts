import type { Quiz } from "@/types";

export const quizMock: Quiz = {
  id: '1',
  title: 'What Type of Personality Do You Have?',
  img: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
  authorId: '1',
  tags: ['FItnes', 'Olympic', 'Medition'],
  steps: [
    {
      title: '',
      question: [
        {
          id: 'question_1',
          text: 'Do you often find it difficult to cope with stress and experience 	frequent feelings of overwhelm?',
          type: 'range',
          options: [
            {
                id:'question_1_option_1',
                value:'8',
                text:'True',
                minValue:0,
                maxValue:20
            }
          ]
        }
      ]
    },
    {
        title: '',
        question: [
          {
            id: 'question_2',
            img: '/src/assets/images/eminence-in-the-shadow-bg.webp',
            text: 'Are you happy with the quality of your relationships and the level of 	connection you feel with others?',
            type: 'radio',
            options: [
                {
                    id:'question_2_option_1',
                    value:'True',
                    text:'True'
                },
                {
                    id:'question_2_option_2',
                    value:'Partly True',
                    text:'Partly True'
                },
                {
                    id:'question_2_option_3',
                    value:'Not True',
                    text:'Not True'
                }
              ]
        },
          {
            id: 'question_3',
            text: 'Do 	you frequently struggle with automatic negative thoughtsor 	have difficulty maintaining a positive outlook?',
            type: 'checkbox',
            options: [
                {
                    id:'question_3_option_1',
                    value:'True',
                    text:'True'
                },
                {
                    id:'question_3_option_2',
                    value:'Partly True',
                    text:'Partly True'
                },
                {
                    id:'question_3_option_3',
                    value:'Not True',
                    text:'Not True'
                }
              ]
          }
        ]
      }
  ]
};