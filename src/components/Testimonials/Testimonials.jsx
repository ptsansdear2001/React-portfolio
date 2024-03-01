import React from 'react'
import styles from "./Testimonials.module.css"

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corporis amet, voluptas distinctio eligendi,
                        molestias sequi ducimus aperiam ipsa similique
                        quia porro eaque quam repellat illum tenetur odio vel libero?
                    </p>
                    <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=sph" alt="" />
                    <h4>Pattarasorn Sae Law</h4>
                    <p className={styles.bio}>System Analysis</p>

                </div>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corporis amet, voluptas distinctio eligendi,
                        molestias sequi ducimus aperiam ipsa similique
                        quia porro eaque quam repellat illum tenetur odio vel libero?
                    </p>
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                    <h4>Pattarasorn Sae Law</h4>
                    <p className={styles.bio}>System Analysis</p>

                </div>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia corporis amet, voluptas distinctio eligendi,
                        molestias sequi ducimus aperiam ipsa similique
                        quia porro eaque quam repellat illum tenetur odio vel libero?
                    </p>
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <h4>Pattarasorn Sae Law</h4>
                    <p className={styles.bio}>System Analysis</p>

                </div>

            </div>
        </div>
    )
}

export default Testimonials