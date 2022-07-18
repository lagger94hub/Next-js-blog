import { useEffect, useState } from "react";
import classes from "./_contact.module.scss";
import Notification from "../ui/notification";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    message: "",
    name: "",
  });
  const [notification, setNotification] = useState({
    title: "",
    message: "",
    status: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      // send Http request
      setNotification({
        title: "Working...",
        message: "Saving your data",
        status: "pending",
      });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      setNotification({
        title: "Done!!",
        message: "Your data was saved successfully",
        status: "success",
      });
      setData({
        email: '',
        name: '',
        message: ''
      })
    } catch (e) {
      setNotification({
        title: "Oops!!",
        message: e.message,
        status: "error",
      });
    }
  };
  const enterValue = (value, field) => {
    setData((oldData) => {
      return {
        ...oldData,
        [field]: value,
      };
    });
  };
  useEffect(() => {
    if (notification && (notification.status === 'error' || notification.status === 'success'))
      setTimeout(() => {
        setNotification(null);
      }, 3000);
  }, [notification]);
  return (
    <>
      <section className={classes.contact}>
        <h1>How can I help you ?</h1>
        <form
          className={classes.form}
          onSubmit={(event) => submitHandler(event)}
        >
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                onChange={(event) =>
                  enterValue(event.currentTarget.value, "email")
                }
                value={data.email}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                onChange={(event) =>
                  enterValue(event.currentTarget.value, "name")
                }
                value={data.name}
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              cols="20"
              rows="5"
              required
              onChange={(event) =>
                enterValue(event.currentTarget.value, "message")
              }
              value={data.message}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
      </section>
    </>
  );
};
export default Contact;
