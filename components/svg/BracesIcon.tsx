import { SVGAttributes } from 'react'

const BracesIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.757 17.253a3.2 3.2 0 01-1.037-.193 3 3 0 01-.835-.475 3.29 3.29 0 01-.642-.694 4.711 4.711 0 01-.448-.853 4.99 4.99 0 01-.264-.932 5.155 5.155 0 01-.088-.94v-1.485c0-.844-.202-1.456-.606-1.837C1.438 9.463.827 9.27 0 9.264V7.989c.826 0 1.438-.187 1.837-.562.404-.381.606-.996.606-1.846V4.087c0-.31.027-.624.08-.94.052-.323.134-.633.246-.932a4.28 4.28 0 01.421-.853c.176-.263.387-.495.633-.694.246-.2.528-.357.844-.475A3.472 3.472 0 015.757 0l.184 1.01c-.421.012-.758.112-1.01.3a1.8 1.8 0 00-.563.72 3.264 3.264 0 00-.237.976c-.035.363-.053.723-.053 1.08v1.495c-.006.703-.17 1.321-.492 1.855-.322.527-.823.928-1.503 1.204.68.27 1.18.67 1.503 1.204.322.527.486 1.14.492 1.837v1.485c0 .363.03.724.088 1.081.059.363.158.688.299.976.146.293.337.533.571.72.24.188.542.287.905.3l-.184 1.01zM11.89 16.242c.358-.012.657-.111.897-.299.24-.187.43-.427.571-.72.147-.288.25-.613.308-.976.064-.357.097-.718.097-1.081v-1.485c0-.698.16-1.31.483-1.837.322-.533.823-.935 1.503-1.204-.68-.276-1.18-.677-1.503-1.204-.322-.534-.483-1.152-.483-1.855V4.087c0-.358-.02-.718-.062-1.081a3.098 3.098 0 00-.246-.976 1.731 1.731 0 00-.554-.72c-.246-.188-.58-.288-1.002-.3L12.075 0c.404.012.765.076 1.081.193.322.118.607.276.853.475.246.2.454.43.624.694.176.264.32.548.43.853.112.299.194.61.246.931.053.317.08.63.08.94v1.495c0 .85.202 1.465.606 1.846.404.375 1.017.562 1.837.562v1.275c-.82.006-1.433.199-1.837.58-.404.38-.606.993-.606 1.837v1.485c0 .469-.065.94-.194 1.415-.129.48-.33.917-.606 1.31-.27.392-.613.714-1.029.966-.415.252-.91.384-1.485.396l-.184-1.01z"
      ></path>
    </svg>
  )
}

export default BracesIcon