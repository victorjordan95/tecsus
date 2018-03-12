(function() {

    appendContent('svg-icons' , _getIcons());
    appendContent('footer', _getFooter());

    function appendContent(id, content) {
        document.getElementById(id).innerHTML = content;
    };



    function _getIcons(){
        return (`
            <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                <title>arrow Left</title>
                <path d="M10.445 11.214l11.111-11.111 4.834 4.833-11.112 11.112 11.111 11.111-4.834 4.834-15.947-15.945z"></path>
            </symbol>
            <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                <title>arrow right</title>
                <path d="M21.55 11.218l-11.101-11.103-4.831 4.829 11.103 11.103-11.101 11.102 4.829 4.83 15.934-15.933z"></path>
            </symbol>
            <symbol id="icon-quote" viewBox="0 0 32 32">
                <title>Quote mark</title>
                <path d="M30.336 18.336c-0.416-2.784-2.784-4.768-5.472-4.896 0.672-2.496 2.304-3.488 4.288-4.064 0.192-0.064 0.16-0.256 0.16-0.256l-0.32-1.984c0 0-0.032-0.16-0.288-0.128-6.848 0.768-11.488 5.984-10.624 12.32 0.8 4.384 4.224 6.080 7.392 5.632 3.168-0.512 5.344-3.456 4.864-6.624v0zM8.48 13.44c0.64-2.496 2.336-3.488 4.288-4.064 0.192-0.064 0.16-0.256 0.16-0.256l-0.288-1.984c0 0-0.032-0.16-0.288-0.128-6.848 0.736-11.456 5.952-10.656 12.288 0.832 4.416 4.288 6.112 7.424 5.664 3.168-0.512 5.344-3.456 4.832-6.624-0.416-2.816-2.752-4.8-5.472-4.896z"></path>
            </symbol>
            <symbol id="icon-twitter-square" viewBox="0 0 24 28">
                <title>twitter-square</title>
                <path d="M20 9.531c-0.594 0.266-1.219 0.438-1.891 0.531 0.688-0.406 1.203-1.062 1.453-1.828-0.641 0.375-1.344 0.656-2.094 0.797-0.594-0.641-1.453-1.031-2.391-1.031-1.813 0-3.281 1.469-3.281 3.281 0 0.25 0.016 0.516 0.078 0.75-2.734-0.141-5.156-1.437-6.781-3.437-0.281 0.484-0.453 1.062-0.453 1.656 0 1.141 0.531 2.141 1.422 2.734-0.547-0.016-1.062-0.172-1.563-0.406v0.031c0 1.594 1.203 2.922 2.703 3.219-0.281 0.078-0.5 0.125-0.797 0.125-0.203 0-0.406-0.031-0.609-0.063 0.422 1.297 1.625 2.25 3.063 2.281-1.125 0.875-2.531 1.406-4.078 1.406-0.266 0-0.531-0.016-0.781-0.047 1.453 0.922 3.172 1.469 5.031 1.469 6.031 0 9.344-5 9.344-9.344 0-0.141 0-0.281-0.016-0.422 0.641-0.453 1.203-1.031 1.641-1.703zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
            </symbol>
            <symbol id="icon-facebook" viewBox="0 0 32 32">
                <title>facebook</title>
                <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
            </symbol>
            <symbol id="icon-linkedin" viewBox="0 0 32 32">
                <title>linkedin</title>
                <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
            </symbol>
            <symbol id="icon-stats" viewBox="0 0 32 32">
                <title>stats</title>
                <path d="M6.987 5h-0.987v23h20v-0.963l-18.996-0.050-0.017-21.987zM14 13.812l-5-5v16.188h5v-11.188zM15 13.125v11.875h5v-12.875l-2-2-3 3zM21 16v9h5v-9h-5zM18.119 7.371l5.242 5.259-1.467 1.39 4.103 0.044-0.019-3.961-1.771 1.719-6.086-6.175-3.745 3.787-4.317-4.314-0.877 0.911 5.123 5.168 3.814-3.828z"></path>
            </symbol>
            <symbol id="icon-child" viewBox="0 0 20 28">
                <title>child</title>
                <path d="M18.562 8.563l-4.562 4.562v12.875c0 0.969-0.781 1.75-1.75 1.75s-1.75-0.781-1.75-1.75v-6h-1v6c0 0.969-0.781 1.75-1.75 1.75s-1.75-0.781-1.75-1.75v-12.875l-4.562-4.562c-0.578-0.594-0.578-1.531 0-2.125 0.594-0.578 1.531-0.578 2.125 0l3.563 3.563h5.75l3.563-3.563c0.594-0.578 1.531-0.578 2.125 0 0.578 0.594 0.578 1.531 0 2.125zM13.5 6c0 1.937-1.563 3.5-3.5 3.5s-3.5-1.563-3.5-3.5 1.563-3.5 3.5-3.5 3.5 1.563 3.5 3.5z"></path>
            </symbol>
            <symbol id="icon-target" viewBox="0 0 32 32">
                <title>target</title>
                <path d="M32 14h-3.154c-0.864-5.57-5.276-9.982-10.846-10.846v-3.154h-4v3.154c-5.57 0.864-9.982 5.276-10.846 10.846h-3.154v4h3.154c0.864 5.57 5.276 9.982 10.846 10.846v3.154h4v-3.154c5.57-0.864 9.982-5.276 10.846-10.846h3.154v-4zM24.776 14h-3.118c-0.603-1.705-1.953-3.056-3.658-3.658v-3.118c3.36 0.765 6.010 3.416 6.776 6.776zM16 18c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2zM14 7.224v3.118c-1.705 0.603-3.056 1.953-3.658 3.658h-3.118c0.765-3.36 3.416-6.010 6.776-6.776zM7.224 18h3.118c0.603 1.705 1.953 3.056 3.658 3.658v3.118c-3.36-0.765-6.010-3.416-6.776-6.776zM18 24.776v-3.118c1.705-0.603 3.056-1.953 3.658-3.658h3.118c-0.765 3.36-3.416 6.010-6.776 6.776z"></path>
            </symbol>
            <symbol id="icon-googleplay" viewBox="0 0 32 32">
                <title>googleplay</title>
                <path d="M12 12.281h11.328c0.109 0.609 0.187 1.203 0.187 2 0 6.844-4.594 11.719-11.516 11.719-6.641 0-12-5.359-12-12s5.359-12 12-12c3.234 0 5.953 1.188 8.047 3.141l-3.266 3.141c-0.891-0.859-2.453-1.859-4.781-1.859-4.094 0-7.438 3.391-7.438 7.578s3.344 7.578 7.438 7.578c4.75 0 6.531-3.406 6.813-5.172h-6.813v-4.125z"></path>
            </symbol>
            <symbol id="icon-appleinc" viewBox="0 0 32 32">
                <title>appleinc</title>
                <path d="M24.734 17.003c-0.040-4.053 3.305-5.996 3.454-6.093-1.88-2.751-4.808-3.127-5.851-3.171-2.492-0.252-4.862 1.467-6.127 1.467-1.261 0-3.213-1.43-5.28-1.392-2.716 0.040-5.221 1.579-6.619 4.012-2.822 4.897-0.723 12.151 2.028 16.123 1.344 1.944 2.947 4.127 5.051 4.049 2.026-0.081 2.793-1.311 5.242-1.311s3.138 1.311 5.283 1.271c2.18-0.041 3.562-1.981 4.897-3.931 1.543-2.255 2.179-4.439 2.216-4.551-0.048-0.022-4.252-1.632-4.294-6.473zM20.705 5.11c1.117-1.355 1.871-3.235 1.665-5.11-1.609 0.066-3.559 1.072-4.713 2.423-1.036 1.199-1.942 3.113-1.699 4.951 1.796 0.14 3.629-0.913 4.747-2.264z"></path>
            </symbol>
        `);
    }

    function _getFooter() {
        return(
            `
            <div class="social-media">
                <a href="https://www.facebook.com/tecsusbr" class="social-media--link">
                    <svg class="icon icon-facebook social-media--icon">
                        <use xlink:href="#icon-facebook"></use>
                    </svg>
                </a>
                <a href="https://twitter.com/tecsusbr" class="social-media--link">
                    <svg class="social-media--icon icon icon-twitter-square">
                        <use xlink:href="#icon-twitter-square"></use>
                    </svg>
                </a>
                <a href="http://www.linkedin.com/company-beta/3063821" class="social-media--link">
                    <svg class="social-media--icon icon icon-linkedin">
                        <use xlink:href="#icon-linkedin"></use>
                    </svg>
                </a>
            </div>
            <p class="name">Copyright © www.tecsus.com.br 2017 </p>
            <p class="developed">Desenvolvido por <a href="https://victorjordan95.github.io">Victor Jordan</a></p>
            `
        )
    }

})();