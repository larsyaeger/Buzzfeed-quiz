const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');

const questions = [
  {
    id: 0,
    text: 'Choose a vacation destination',
    answers: [
      {
        text: 'New York, USA',
        image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80',
        alt: 'Photo of the Empire State building',
        credit: 'Kit Suman'
      },
      {
        text: 'Athens, Greece',
        image: 'https://images.unsplash.com/photo-1581048875236-0676d84a64d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Photo of Athens, Greece',
        credit: 'Courtney Hall'
      },
      {
        text: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1777&q=80',
        alt: 'Photo of tokyo intersection',
        credit: 'Jezael Melgoza'
      },
      {
        text: 'Wellington, New Zealand',
        image: 'https://images.unsplash.com/photo-1587803855433-ef37267f70f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Photo of Wellington, New Zealand red train',
        credit: 'Guillaume Lebelt'
      },
    ]
  },
  {
    id: 1,
    text: 'Choose a preferred food',
    answers: [
      {
        text: 'Fried chicken',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        alt: 'Photo of fried chicken',
        credit: 'Shardar Tarikul Islam'
      },
      {
        text: 'Salad',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        alt: 'Photo of a green salad',
        credit: 'Anna Pelzer'
      },
      {
        text: 'Steak',
        image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        alt: 'Photo of wagyu beef steak',
        credit: 'Madie Hamilton'
      },
      {
        text: 'Pizza',
        image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        alt: 'A delicious looking pizza',
        credit: 'Kelvin T'
      }
    ]
  },
  {
    id: 2,
    text: 'Choose your preferred home style',
    answers: [
      {
        text: 'Spanish',
        image: 'https://www.thespruce.com/thmb/WducVK712batB44MEAeK-_t8Ftc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spanish-style-living-rooms-4798045-hero-f62485a27eb14547a739669f6fcf3c95.jpg',
        alt: 'A spanish home interior photo',
        credit: 'Christopher Lee Foto'
      },
      {
        text: 'Modern industrial',
        image: 'https://decoholic.org/wp-content/uploads/2020/10/industrial-loft-1.jpg',
        alt: 'A modern industrial home interior photo',
        credit: 'loft buro'
      },
      {
        text: 'Beach',
        image: 'https://cdn.onekindesign.com/wp-content/uploads/2016/04/Stonewall-Beach-House-Marthas-Vineyard-Interior-Design-03-1-Kindesign.jpg',
        alt: 'A "beach style" home interior photo',
        credit: 'onekindesign'
      },
      {
        text: 'Modern',
        image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2652&q=80',
        alt: 'A modern style home interior photo',
        credit: 'R architecture'
      }
    ]
  }
];

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
  questions.forEach(question => {

    const titleBlock = document.createElement('div');
    titleBlock.id = question.id;
    titleBlock.classList.add('title-block');

    const titleHeading = document.createElement('h2');
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement('div');
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add('answer-options');

    unansweredQuestions.push(question.id);

    question.answers.forEach(answer => {

      const answerBlock = document.createElement('div');
      answerBlock.classList.add('answer-block');
      answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));

      const answerImage = document.createElement('img');
      answerImage.setAttribute('src', answer.image);
      answerImage.setAttribute('alt', answer.alt);

      const answerTitle = document.createElement('h3');
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement('p');

      const imageLink = document.createElement('a');
      imageLink.textContent = answer.credit;
      imageLink.setAttribute('href', answer.credit);

      const sourceLink = document.createElement('a');
      sourceLink.textContent = 'Credit: ';
      sourceLink.setAttribute('src', 'https://www.unsplash.com');

      answerInfo.append(sourceLink, ' ', imageLink);
      answerBlock.append(answerImage, answerTitle, answerInfo);
      answersBlock.append(answerBlock);
    });
    questionDisplay.append(answersBlock);
  });
};
populateQuestions();
const handleClick = (questionID, chosenAnswer) => {
  if (unansweredQuestions.includes(questionID))
    chosenAnswers.push(chosenAnswer);
  const itemToRemove = unansweredQuestions.indexOf(questionID);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }
  console.log(chosenAnswers);
  console.log(unansweredQuestions);

  //disableQuestionBlock(questionID, chosenAnswer)
  const lowestQuestionID = Math.min(...unansweredQuestions)
  location.href = '#' + lowestQuestionID

  if (!unansweredQuestions.length) {
    //scroll to answer div
   // showAnswer();
  }
};
