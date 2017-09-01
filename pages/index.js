import Head from 'next/head'
import { ValidationError, ValidationErrors } from '../validation-messages'

let errors = new ValidationErrors(
    new ValidationError('name', { key: 'required' }),
    new ValidationError('email', { key: 'minlength', requiredLength: 10, actualLength: 5 })
)

export default () => (
    <div>
        <Head>
            <title>Demo :)</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div className="container">

            <h1>Person registration form</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" className="form-control" type="text" />
                    {errors.name && <div className="alert alert-danger">{errors.name.message}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" name="email" className="form-control" type="email" aria-describedby="emailHelp" />
                    <small id="emailHelp">We'll never share your email with anyone else.</small>
                    {errors.email && <div className="alert alert-danger">{errors.email.message}</div>}
                </div>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    </div>
)