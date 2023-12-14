import React, {useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import './App.css'
import { Navigate } from 'react-router-dom'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<div class="input-group">
                    <input class="form-input" id="inputGroupSelect04" 
                    placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
                    />
                    <button class="btn btn-outline-secondary" type="button"
                    onClick={() => createDirectChat(creds)} >Search</button>
                </div>
			</div>
		)
	}

	let user = localStorage.getItem('temp_chat')
	user = JSON.parse(user)

	if(user != null){
		// console.log(user)
		return (
		<ChatEngine
			height='100vh'
			width='100vw'
			userName={user.user}
			userSecret={user.pass}
			projectID='b592981a-730c-4896-87e2-804a88fbf6a9'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
	}
	else{
		return(
			<Navigate to="/login" />
		)
	}
	
	
	
}

export default DirectChatPage;
