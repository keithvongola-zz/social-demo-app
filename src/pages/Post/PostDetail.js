import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { PostItem, CommentItem } from '../../components';
import { metrics, colors } from '../../styles';

class PostDetail extends PureComponent {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    const { navigation, getComments } = this.props;
    const postId = navigation.getParam('id');
    if (postId) getComments(postId);
  }

  _renderItem({ item }) {
    return (
      <CommentItem
        email={item.get('email')}
        title={item.get('name')}
        body={item.get('body')}
      />
    );
  }

  _keyExtractor(item, index) {
    return `${index}::${item.get('id')}`;
  }

  render() {
    const { post, comments, loading } = this.props;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {
          loading
            ? (
              <ActivityIndicator
                animating
                size="large"
                style={styles.activityIndicator}
              />
            )
            : (
              <FlatList
                ListHeaderComponent={(
                  <PostItem
                    id={post.get('id')}
                    title={post.get('title')}
                    body={post.get('body')}
                  />
              )
            }
                data={comments && comments.toArray()}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
              />
            )
        }

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  activityIndicator: {
    marginTop: metrics.V_PADDING,
  },
});

PostDetail.propTypes = {
  getComments: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  post: PropTypes.instanceOf(Map).isRequired,
  comments: PropTypes.instanceOf(List).isRequired,
};


export default PostDetail;
