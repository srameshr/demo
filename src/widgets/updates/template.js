export const constructTemplate = ({type, action, at, user, content }) => (
     $(`<section class="updates-wrapper">
            <div class="header-updates-wrapper">
                <div class="left-wrapper">
                    <img src="${user.avatar}"/>
                    <p><a class="name" href="#">${user.name}</a>
                    <span class="type">${action} a</span>
                    <a class="update" href="#">${type}</a></p>
                </div>
                <div class="right-wrapper">
                    <span>${at}</span>
                </div>
            </div>
            <div class="update-image-wrapper">
                <div class="update-cover" style="background-image:url(${content.image})"></div>
            </div>
            <div class="update-content-wrapper">
                <div class="update-content-header">
                    <h3>${content.title}</h3>
                </div>
                <div class="update-content-description">
                    <p>${content.description}</p>
                </div>
            

                <div class="update-content-reactions">
                    <div class="left-wrapper">
                        <div>
                            <span class="reactions">❤️</span>
                            <span class="reactions">😂</span>
                        </div>
                        <div class="reactions-by">
                            <span>${content.by}</span>
                        </div>
                    </div>
                    <div class="right-wrapper">
                        <a href="#">${content.comments} comments</a>
                    </div>
                </div>
                <div class="update-content-comment">
                </div>
            </div>
        </section>`)
);