<template>
    <div class="AppPreloader bg-danger">
        <div class="AppPreloader__inner p-3">
            <svg 
                class="AppPreloader__pokeball"
                viewBox="0 0 64 64" 
                xmlns="http://www.w3.org/2000/svg"
            >   
                <circle class="AppPreloader__center" cx="32" cy="32" r="31" />
                <path class="AppPreloader__top" d="m62 32h-14a16 16 0 0 0 -32 0h-14a30 30 0 0 1 60 0z" />
                <path
                    class="AppPreloader__flare"
                    d="m6.726 25.811a1 1 0 0 0 1.236-.687 24.788 24.788 0 0 1 .961-2.739 1 1 0 0 0 -1.846-.771 27.076 27.076 0 0 0 -1.039 2.961 1 1 0 0 0 .688 1.236z" />
                <path
                    class="AppPreloader__flare"
                    d="m9.56 18.842a1 1 0 0 0 1.381-.3 24.927 24.927 0 0 1 21.059-11.542 1 1 0 0 0 0-2 26.921 26.921 0 0 0 -22.742 12.46 1 1 0 0 0 .302 1.382z" />
                <circle class="AppPreloader__center" cx="32" cy="32" r="16" />
                <circle class="AppPreloader__center" cx="32" cy="32" r="6" />
                <line class="AppPreloader__contour" x1="1" y1="32" x2="16" y2="32"  />
                <line class="AppPreloader__contour" x1="48" y1="32" x2="64" y2="32" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPreloader'
}
</script>

<style lang="scss">
    .AppPreloader {   
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        
        &__inner {
            width: 100%;
        }
        
        &__pokeball {
            -webkit-animation-name: rotation;
            -webkit-animation-duration: 3s;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-timing-function: linear;
            -moz-animation-name: rotation;
            -moz-animation-duration: 3s;
            -moz-animation-iteration-count: infinite;
            -moz-animation-timing-function: linear;
            -o-animation-name: rotation;
            -o-animation-duration: 3s;
            -o-animation-iteration-count: infinite;
            -o-animation-timing-function: linear;
            animation-name: rotation;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        &__contour {
            stroke: var(--dark);
            stroke-width: 2px;
        }

        &__top {
            fill: var(--danger);
        }

        &__center {
            stroke: var(--dark);
            stroke-width: 2px;
            fill: var(--light);
        }

        &__flare {
            fill: var(--light);
        }

        @-webkit-keyframes rotation {
            0% {-webkit-transform:rotate(0deg);
            -moz-transform:rotate(0deg);
            -o-transform:rotate(0deg);
            transform:rotate(0deg);}
            100% {-webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            transform:rotate(360deg);}
        }
        @-moz-keyframes rotation {
            0% {-webkit-transform:rotate(0deg);
            -moz-transform:rotate(0deg);
            -o-transform:rotate(0deg);
            transform:rotate(0deg);}
            100% {-webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            transform:rotate(360deg);}
        }
        @-o-keyframes rotation {
            0% {-webkit-transform:rotate(0deg);
            -moz-transform:rotate(0deg);
            -o-transform:rotate(0deg);
            transform:rotate(0deg);}
            100% {-webkit-transform:rotate(360deg);
            -moz-transform:rotate(360deg);
            -o-transform:rotate(360deg);
            transform:rotate(360deg);}
        }
        @keyframes rotation {
            0% {-webkit-transform:rotate(0deg);
            -moz-transform:rotate(0deg);
            -o-transform:rotate(0deg);
            transform:rotate(0deg);}
            100% {-webkit-transform:rotate(360deg);
            -moz-transform:rotate(720deg);
            -o-transform:rotate(360deg);
            transform:rotate(360deg);}
        }
    }
</style>    