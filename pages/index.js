import { ValidationError, ValidationErrors } from '../validation-messages'

let errors = new ValidationErrors(
    new ValidationError('name', { key: 'required' }),
    new ValidationError('email', { key: 'minlength', requiredLength: 10, actualLength: 5 })
)

export default () => (
    <div>
        <h3>Person registration form</h3>
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
            <button type="submit">Register</button>
        </form>
        <style jsx>{`
            .form-control {
                display: block;
            }
        `}</style>
    </div>
)