export const props =  {
  stack: {
    id: 0,
    title: 'test title',
    cards: [{ id: 0, prompt: 'test prompt', answer: 'test answer'},
            { id: 1, prompt: 'test prompt', answer: 'test answer'}]
  }
};

export const stacks = [ props.stack ];

export const propscard = {
  card: {
    prompt: 'test_prompt',
    answer: 'test_answer'
  }
}

export const stackform =  {
  title: 'titleTest',
  prompt: 'promptTest',
  answer: 'answerTest'
};
