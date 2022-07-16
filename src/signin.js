import React from 'react';
import './signin.css';


function signin() {
	return (
		<>

			<div className="brand"> <img src={require("./Image/Logo.png")} alt={'Logo'} /> </div>

			<div className="container">

				<div className="box home">

					<div className="image"> 
						<img width={700} height={500} src={require("./Image/Rectangle.png")} alt={'photos'} />
						<div className="box-border">
							<img src={require("./Image/Pink.png")} alt={'photos'} />
						</div>
						<div className="box-border-2">
							<img src={require("./Image/Medlife.png")} alt={'photos'} />
						</div>
					</div>

				</div>

				<div className="box">
					<div className="content">

						<form>
							<h1> <span class="line">Sign-In</span></h1>
							
							<p>Email or Mobile number</p>
							<input type="" placeholder="Enter your Email / Phone number" required/>
							
							<div className="passwords">
								<div className="pass">
									<p>Password</p>
									<input type="password" placeholder="Enter your Password" required />
								</div>
								
							</div>

							<button type="submit" className="btn btn-primary">Sign In</button>

							<div className="sub-topic">

								<p className="topic-1"><a href="#">Need Help?</a></p>

								<p className="topic-1 topic2"><a href="#">Forgot Password?</a></p>

							</div>

							<p className="privacy">By continuing, you agree to Medlife's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a></p>

							<div className="text">

							</div>


							<div className="button">
								<button type="submit" className="btn2 btn-light">Create your Medlife account</button>
							</div>

						</form>

					</div>

				</div>

			</div>

		</>
	)
}

export default signin; 