setInterval(() => {
	const artistCardsArr = document.querySelectorAll('.artistCards');
// get all elements with class artistCards


	const newCard = document.createElement('div');
	const newCard_two = document.createElement('div');

    const banner='v1677720102/audio/aric-improta/banner.jpg'
    const avatar='https://res.cloudinary.com/sub50k/image/upload/f_auto,q_auto/v1677498205/audio/aric-improta/avatar.png'
    const artistName='Aric Improta'
    const text='Aric Improta is a Grammy nominated drummer who plays for the bands Fever 333 and Night Verses.'
    const listeners=819

	newCard.innerHTML = `
    <div
	class="group relative w-64 h-[19.5rem] overflow-hidden rounded-lg border border-gray-400/50 bg-gray-700 py-6 px-6 text-gray-200 shadow-lg shadow-green-400 ring-1 ring-gray-900/5"
    >
        <div
            class="absolute top-2 left-0 z-20 m-3 flex -rotate-12 items-center rounded-md border-2 border-green-300 bg-gray-900 px-1 py-0.5 text-sm text-green-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 mr-1"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                ></path>
            </svg>
            Sub 50k
        </div>
        <div class="absolute inset-0 z-10 h-36">
            <img
                src=https://res.cloudinary.com/sub50k/image/upload/ar_7:3,c_fill,f_auto,q_auto,w_748/${banner}
                class="h-full w-full object-cover opacity-80 grayscale"
                alt="banner"
            />
        </div>
        <div
            class="absolute inset-0 z-10 h-36 bg-gradient-to-b from-transparent to-gray-700"
        >
        </div>
        <!-- Top banner -->
        <div class="relative z-20 h-32">
            <div class="flex flex-col items-center">
                <img
                    src=${avatar}
                    class="h-16 rounded-full border-2 border-gray-700"
                    alt="avatar"
                />
                <div class="mt-6 prose">
                    <h2
                        class="border-b border-primary-main text-xl uppercase text-primary-main"
                    >
                        ${artistName}
                    </h2>
                </div>
            </div>
        </div>
        <div class="mt-4 divide-y divide-gray-300/50">
            <div class="pb-4 text-sm">
                <p class="line-clamp-3">
                    ${text}
                </p>
            </div>
            <div class="ml-2 pt-4 text-center font-mono text-lg uppercase">
                monthly: ${listeners.toLocaleString('en-US')}
            </div>
        </div>
    </div>
    `;

	newCard_two.innerHTML = `
    <div
	class="group relative w-64 h-[19.5rem] overflow-hidden rounded-lg border border-gray-400/50 bg-gray-700 py-6 px-6 text-gray-200 shadow-lg shadow-green-400 ring-1 ring-gray-900/5"
    >
        <div
            class="absolute top-2 left-0 z-20 m-3 flex -rotate-12 items-center rounded-md border-2 border-green-300 bg-gray-900 px-1 py-0.5 text-sm text-green-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 mr-1"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                ></path>
            </svg>
            Sub 50k
        </div>
        <div class="absolute inset-0 z-10 h-36">
            <img
                src=https://res.cloudinary.com/sub50k/image/upload/ar_7:3,c_fill,f_auto,q_auto,w_748/${banner}
                class="h-full w-full object-cover opacity-80 grayscale"
                alt="banner"
            />
        </div>
        <div
            class="absolute inset-0 z-10 h-36 bg-gradient-to-b from-transparent to-gray-700"
        >
        </div>
        <!-- Top banner -->
        <div class="relative z-20 h-32">
            <div class="flex flex-col items-center">
                <img
                    src=${avatar}
                    class="h-16 rounded-full border-2 border-gray-700"
                    alt="avatar"
                />
                <div class="mt-6 prose">
                    <h2
                        class="border-b border-primary-main text-xl uppercase text-primary-main"
                    >
                        ${artistName}
                    </h2>
                </div>
            </div>
        </div>
        <div class="mt-4 divide-y divide-gray-300/50">
            <div class="pb-4 text-sm">
                <p class="line-clamp-3">
                    ${text}
                </p>
            </div>
            <div class="ml-2 pt-4 text-center font-mono text-lg uppercase">
                monthly: ${listeners.toLocaleString('en-US')}
            </div>
        </div>
    </div>
    `;
    newCard.classList.add('scrollDownCard')
    newCard_two.classList.add('scrollDownCard')
    artistCardsArr[0]?.appendChild(newCard);
    artistCardsArr[1]?.appendChild(newCard_two);

    // after 5 second remove this child from the DOM
    setTimeout(() => {
        newCard.remove();
        newCard_two.remove();
    }, 5000);
}, 1150);