import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/action";
import { useState } from "react";


const Form = () => {
    const [y, setY] = useState(0);

    const dispatch = useDispatch();
    const data = useSelector(state => [...state]);

    const passData = (event) => {
        event.preventDefault();

        const form = event.target;
        const to = form.to.value;
        const ticketClass = form.ticketClass.value;
        const guests = form.guests.value;
        const from = form.from.value;
        const date = form.date.value;
        const id = y + 1;
        // let from = getSelectedText('lws-form');
        // let to = getSelectedText('lws-to');
        // let ticketClass = getSelectedText('lws-ticketClass');
        // let guests = document.getElementById('lws-guests').value;
        // let date = document.getElementById('lws-date').value;
        setY((prevY) => prevY + 1);
        const value = {
            id,
            from,
            to,
            ticketClass,
            guests,
            date
        };

        if (data.length < 3) {
            dispatch(add(value));
        }

    }


    return (
        <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form onSubmit={passData} class="first-hero lws-inputform">
                {/* <!-- From --> */}
                <div class="des-from">
                    <p>Destination From</p>
                    <div class="flex flex-row">
                        <img src="./img/icons/Frame.svg" alt="" />
                        <select class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                            <option value="" hidden>Please Select</option>
                            <option>Dhaka</option>
                            <option>Sylhet</option>
                            <option>Saidpur</option>
                            <option>Cox's Bazar</option>
                        </select>
                    </div>
                </div>

                {/* <!-- To --> */}
                <div class="des-from">
                    <p>Destination To</p>
                    <div class="flex flex-row">
                        <img src="./img/icons/Frame.svg" alt="" />
                        <select class="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                            <option value="" hidden>Please Select</option>
                            <option>Dhaka</option>
                            <option>Sylhet</option>
                            <option>Saidpur</option>
                            <option>Cox's Bazar</option>
                        </select>
                    </div>
                </div>

                {/* <!-- Date --> */}
                <div class="des-from">
                    <p>Journey Date</p>
                    <input type="date" class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                </div>

                {/* <!-- Guests --> */}
                <div class="des-from">
                    <p>Guests</p>
                    <div class="flex flex-row">
                        <img src="./img/icons/Vector (1).svg" alt="" />
                        <select class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                            <option value="" hidden>Please Select</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 Persons</option>
                            <option value="3">3 Persons</option>
                            <option value="4">4 Persons</option>
                        </select>
                    </div>
                </div>

                {/* <!-- Class --> */}
                <div class="des-from !border-r-0">
                    <p>Class</p>
                    <div class="flex flex-row">
                        <img src="./img/icons/Vector (3).svg" alt="" />
                        <select class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                            <option value="" hidden>Please Select</option>
                            <option>Business</option>
                            <option>Economy</option>
                        </select>
                    </div>
                </div>

                <button class="addCity" type="submit" id="lws-addCity">
                    <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span class="text-sm">Book</span>
                </button>
            </form>
        </div>
    );
};

export default Form;