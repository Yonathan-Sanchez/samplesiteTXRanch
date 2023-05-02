import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialValues = {
	name: '',
	phone: '',
	email: '',
	interest: '',
	feedback: '',
	referredBy: '',
	mailingListConsent: false,
};

function Form() {
	const [formValues, setFormValues] = useState(initialValues);
	// console.log(formValues)

	function handleChange(e) {
		if (e.target.name === 'phone') {
			setFormValues({
				...formValues,
				phone: e.target.value,
			});
		} else {
			setFormValues({
				...formValues,
				[e.target.name]: e.target.value,
			});
		}
	}

	return (
		<>
			<form>
				<li className='formItem'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						required
						value={initialValues.name}
						onChange={handleChange}
					/>
					<label htmlFor='phone'>Phone</label>
					<input
						type='tel'
						required
						value={initialValues.phone}
						onChange={(e) => handleChange}
					/>
					<label htmlFor='email'>Email</label>
					<input type='text' required value={initialValues.email} />
				</li>
				<li className='formItem'>
					<label htmlFor='i-am-interested-in'>I am interested in</label>
					<select
						name='interest'
						value={initialValues.interest}
						onChange={handleChange}>
						<option value='General Inquiry'>General Inquiry</option>
						<option value='Buying a ranch'>Buying a ranch</option>
						<option value='Selling a ranch'>Selling a ranch</option>
					</select>
				</li>
				<li className='formItem'>
					<label htmlFor='questions-or-comments'>Questions or Comments</label>
					<input
						type='textarea'
						value={initialValues.feedback}
						onChange={handleChange}
					/>
				</li>
				<li className='formItem'>
					<label htmlFor='how-did-you-hear-about-us'>
						How did you hear about us?
					</label>
					<select
						name='referred-by'
						value={initialValues.referredBy}
						onChange={handleChange}>
						<option value='Texas Ranch Journal'>Texas Ranch Journal</option>
						<option value='Word of Mouth'>Word of Mouth</option>
						<option value='Facebook'>Facebook</option>
						<option value='Instagram'>Instagram</option>
						<option value='Email'>Email</option>
						<option value='Google'>Google</option>
						<option value='Lands of Texas'>Lands of Texas</option>
					</select>
				</li>
				<li className='formItem'>
					<label htmlFor='mailing-list-consent'>
						I want to receive listing updates{' '}
					</label>
					<br />
					<input type='checkbox' value={false} onChange={handleChange} />
					By checking this box you agree to receive emails from Texas Ranch
					Sales, LLC on exclusive listings, price reductions, and other listing
					updates. You can unsubscribe at any time.
				</li>
				<input type='submit' />
			</form>
		</>
	);
}
export default Form;
