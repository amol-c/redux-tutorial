import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";

const mapStateToProps = (state) => ({
    giphyData: state.fetchDataReducer
  });

const mapDispatchToProps = {
    fetchData: fetchData
};

class GiphyView extends React.Component {
    componentDidMount() {
        this.props.fetchData({searchTerm: "Merry Christmas", offset: 0, limit: 10})
    }

    render() {
        const data = this.props.giphyData.data

        if(data && data.length > 0) {
            const images = data.map((eachValue, index) => {
                return <iframe src={`${eachValue.embed_url}`} key={index} />
            })

            return <div>{images}</div>
        }
      return (
        <div />
      );
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GiphyView);
