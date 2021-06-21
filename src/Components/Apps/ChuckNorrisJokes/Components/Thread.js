import React from 'react';

const Thread = ( {card} ) => {
	return(
		<div class="mw9 mv2 center ph3-ns">
 			<div class="cf w-100 ph2-ns">
    			<div class="fl w-10-ns pa2 ">
      				<div class="pv4">
   	      				<img alt='chuck' src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' width= '50' height= 'auto' />
      				</div>
    			</div>
    			<div class="fl w-90-ns pa2">
     				 <div class="bg-light-blue shadow-3 br4 pv4">
     				 	<p class="center pa2">{card.value}</p>
     				 </div>
   				 </div>
  			</div>
		</div>
	)
}

export default Thread;