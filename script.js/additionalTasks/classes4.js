// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e



const input = 'Every developer likes to mix kubernetes and javascript';

const array = input.split(' ').map((word) => {


    if (word.length < 4) {
        return word;
    }
    return `${word[0]}${word.length - 2}${word[word.length-1]}`

}).join(' ')

console.log(array);





// Result
// 'E3y d7r l3s to mix k8s and j8t'