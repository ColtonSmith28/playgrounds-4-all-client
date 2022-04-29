import React from 'react';

function AllTag(props) {
    const {classes} = props

    const clickedTag = (id) => {
        props.history.push(`/tags/${id}`)
        const clickedTagObj = props.tags.find(tag => tag.id === id)
        props.handleTagClick(clickedTagObj)
    }

    return (
        <React.Fragment>
        { props.isClickable ?
            <input
                key={props.tagInfo.id}
                label={props.tagInfo.name}
                onClick={() => clickedTag(props.tagInfo.id)}
                clickable
                className={classes.tag}
            />
            :
            <input
                key={props.tagInfo.id}
                label={props.tagInfo.name}
                className={classes.tag}
            />
        }
        </React.Fragment>
    )
}

export default AllTag