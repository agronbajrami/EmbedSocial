const jsonData = [
  {
    image: 'https://placekitten.com/600/400',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2018-03-12 03:00:00',
    likes: '123',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/100',
  },
  {
    image: 'https://placekitten.com/600/410',
    caption:
      'Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ',
    type: 'image',
    source_type: 'instagram',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2019-01-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/150/100',
  },
  {
    image: 'https://placekitten.com/600/420',
    caption: '',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2017-01-21 03:00:00',
    likes: '9866555',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/150',
  },
  {
    image: 'https://placekitten.com/600/430',
    caption:
      'Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '2',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/120/120',
  },
  {
    image: 'https://placekitten.com/600/440',
    caption:
      'Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2018-04-12 03:00:00',
    likes: '12343',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/50/50',
  },
  {
    image: 'https://placekitten.com/600/440',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '123',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/101/101',
  },
  {
    image: 'https://placekitten.com/800/400',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '12',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/150/120',
  },
  {
    image: 'https://placekitten.com/600/500',
    caption:
      'Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2017-12-12 03:00:00',
    likes: '23',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/140/140',
  },
  {
    image: 'https://placekitten.com/700/400',
    caption:
      'Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2017-12-08 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/100',
  },
  {
    image: 'https://placekitten.com/700/500',
    caption:
      'Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-02-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/102/102',
  },
  {
    image: 'https://placekitten.com/800/600',
    caption:
      'Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '2',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/103/100',
  },
  {
    image: 'https://placekitten.com/700/600',
    caption: 'Duis in facilisis lectus.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2020-12-12 03:00:00',
    likes: '1',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/40/100',
  },
  {
    image: 'https://placekitten.com/1600/1400',
    caption:
      'Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-15 03:00:00',
    likes: '2324',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/80/100',
  },
  {
    image: 'https://placekitten.com/1600/400',
    caption:
      'Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-10-12 03:00:00',
    likes: '1223',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/80/80',
  },
  {
    image: 'https://placekitten.com/2000/4000',
    caption:
      'Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2016-12-12 03:00:00',
    likes: '12223',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/110/110',
  },
  {
    image: 'https://placekitten.com/900/600',
    caption:
      ' Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2017-12-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/110/100',
  },
  {
    image: 'https://placekitten.com/600/410',
    caption:
      'Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ',
    type: 'image',
    source_type: 'instagram',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2019-01-12 03:00:00',
    likes: '0',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/150/100',
  },
  {
    image: 'https://placekitten.com/600/420',
    caption: '',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2017-01-21 03:00:00',
    likes: '9866555',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/100/150',
  },
  {
    image: 'https://placekitten.com/600/430',
    caption:
      'Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://www.facebook.com/EmbedSocial/',
    date: '2019-12-12 03:00:00',
    likes: '2',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/120/120',
  },
  {
    image: 'https://placekitten.com/600/440',
    caption:
      'Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.',
    type: 'image',
    source_type: 'facebook',
    source_link: 'https://instagram.com/embedsocial/',
    date: '2018-04-12 03:00:00',
    likes: '12343',
    name: 'John Smith',
    profile_image: 'https://placekitten.com/g/50/50',
  },
];

const currentlyLoaded = [];

const monthMapper = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const formatDate = (date) => {
  const dateObject = new Date(date);

  return (
    dateObject.getDay() +
    ' ' +
    monthMapper[dateObject.getMonth()] +
    ' ' +
    dateObject.getFullYear()
  );
};

//dates

let currentPage = 0; // 0-4

const getHeader = (cardData) => {
  return `<div class="header">
               <div class="top">
                    <div class="profile_image">
                         <img src="${
                           cardData.profile_image
                         }" alt="" class="pfpic">
                    </div> 

                    <div class="datename">
                         <div class="name">
                              ${cardData.name}
                         </div>

                         <div class="date">
                              ${formatDate(cardData.date)}
                         </div>
                    </div>
               </div>

               <div class="social-logo"> 
                    <a href="${
                      cardData.source_type == 'facebook'
                        ? 'https://www.facebook.com/EmbedSocial/'
                        : 'https://instagram.com/embedsocial/'
                    }">
                         <img src="./${
                           cardData.source_type == 'facebook'
                             ? 'facebook.svg'
                             : 'instagram-logo.svg'
                         }" alt="" class="logo"> 
                    </a>
               </div>
          </div>`;
};

const getCard = (cardData, index) => {
  return `
     <li class="card" id="data-${index}">
          ${getHeader(cardData)}
          <div class="main-pic" onclick="dialog(this, ${index})">
               <img src="${cardData.image}" alt="" class="bigpic">
          </div>

          <div class="description">
               ${cardData.caption}
          </div>
          
          <div class="likes">
               <hr />
               <img src="./heart.svg" onclick="test(this, ${index}, 'likes')" />
               <span>
                    ${cardData.likes}
               </span>
          </div>
     </li>
     `;
};

const elementsPerPage = 4;
var addCards = () => {
  for (
    let i = currentPage * elementsPerPage;
    i <
    Math.min(currentPage * elementsPerPage + elementsPerPage, jsonData.length);
    i++
  ) {
    currentlyLoaded.push({
      ...jsonData[i],
      isLiked: false,
    });
    document.getElementById('container').innerHTML += getCard(
      currentlyLoaded[i],
      i
    );
  }
  currentPage++;
  if (currentlyLoaded.length === jsonData.length) {
    document.getElementById('loadMore').remove();
  }
};

const test = (ele, ind, path) => {
  currentlyLoaded[ind].isLiked = !currentlyLoaded[ind].isLiked;

  document
    .querySelector(
      `${
        path === 'likes'
          ? `#data-${ind} div.${path} > img`
          : `div.${path} > img`
      }`
    )
    .classList.toggle('myStyle');
  const likesCount = +currentlyLoaded[ind].likes;
  currentlyLoaded[ind].likes =
    likesCount + (currentlyLoaded[ind].isLiked ? +1 : -1);

  console.log(currentlyLoaded[ind].likes);
  document.querySelector(
    `${
      path === 'likes'
        ? `#data-${ind} div.${path} > span`
        : `div.${path} > span`
    }`
  ).innerHTML = currentlyLoaded[ind].likes;
};

function dialog(ele, ind) {
  //var x = document.getElementById("container").querySelector(`#data-${ind}`);
  var cardData = currentlyLoaded[ind];
  console.log(cardData);
  var window = document.getElementById('idWindow');
  var body = document.getElementsByTagName('body')[0];
  if (window.style.display === 'none') {
    window.style.display = 'flex';
    //body.style.overflow = 'hidden';
  } else {
    window.style.display = 'none';
    //body.style.overflow = 'auto';
  }

  console.log(this.currentlyLoaded);

  window.innerHTML = `
     <div class="windowCard">
          <div class="leftside">
              <img src=${cardData.image} />
           </div>

          <div class="rightside">
               ${getHeader(cardData)}
               <hr />
               <div class="windowCardDescription">
               ${cardData.caption}
          </div>
          
          <div class="windowCardLikes">
               <img src="./heart.svg" onclick="test(this, ${ind}, 'windowCardLikes')" />
               <span>
                    ${cardData.likes}
               </span>
          </div>
          </div> 
     </div>`;

  currentlyLoaded[ind].isLiked &&
    document
      .querySelector(`div.windowCardLikes > img`)
      .classList.toggle('myStyle');
}

addCards();
